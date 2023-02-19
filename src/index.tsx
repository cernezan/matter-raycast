import { List, showToast, Toast, Detail, ActionPanel, Action, Image, openExtensionPreferences, showHUD } from "@raycast/api";
import { useEffect, useState } from "react";
import { Actions } from "./components/Actions";
import { FavoritesDropdown } from "./components/FavoritesDropdown";
import { getQueue } from "./matterApi";
import TokenErrorHandle from "./components/TokenErrorHandle";

interface State {
  items?: any;
  error?: Error;
}

export default function Command() {
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const [state, setState] = useState<State>({});
  const [filter, setFilter] = useState<any>(2);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchQueue() {
      setLoading(true);
      try {
        let items: any = await getQueue();
        if (items.code == "token_not_valid") {
          showToast(Toast.Style.Failure, "Token not valid", "Please check your token in preferences");
          setLoading(false)
          return
        }
        setIsTokenValid(true);
        setState({ items });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setState({
          error: error instanceof Error ? error : new Error("Something went wrong"),
        });
      }
    }

    fetchQueue();
  }, []);

  function getArticleThumbnail(item: any) {
    if (item.content.photo_thumbnail_url) {
      return item.content.photo_thumbnail_url;
    } else if (item.content.publisher.domain_photo) {
      return item.content.publisher.domain_photo;
    } else {
      return "";
    }
  }

  function filterSelection(type: any) {
    filteredData(type)
  }


  function filteredData(filter: any) {
    if (state.items?.feed) {
      state.items.feed = state.items?.feed.filter(function (item: any) {
        return item.content.library.is_favorited == true;
      })
    }

    setState(state)
    console.log(state.items?.feed.length, "L")
  }

  return (
    <>
      {isTokenValid || loading ? (
        <List
          isLoading={loading}
          searchBarAccessory={<FavoritesDropdown filterSelection={filterSelection} />}
        >
          {state.items?.feed.map((item: any) => (
            <List.Item
              key={item.id}
              icon={{
                source: getArticleThumbnail(item),
                mask: Image.Mask.Circle,
              }}
              title={item.content.title}
              actions={<Actions item={item} />}
              accessories={[
                {
                  text: item.content.article?.word_count ? item.content.article?.word_count.toString() + " words" : "",
                },
              ]}
            />
          ))}
        </List>
      ) : (<TokenErrorHandle></TokenErrorHandle>)
      }
    </>
  );
}
