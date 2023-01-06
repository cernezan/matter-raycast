import { ActionPanel, Action, Icon } from "@raycast/api";
import { setFavorite } from "./matterApi";


export function Actions(props: any) {
  return (
    <ActionPanel title={props.item.content.title}>
      <ActionPanel.Section>
        {/* OPEN IN BROWSER */}
        {props.item.content.url && <Action.OpenInBrowser url={props.item.content.url} />}
        {/* COPY LINK */}
        {props.item.content.url && (
          <Action.CopyToClipboard
            content={props.item.content.url}
            title="Copy Link"
            shortcut={{ modifiers: ["cmd"], key: "." }}
          />
        )}
        {/* FAVORITE ARTICLE */}
        {props.item.content.id && !props.item.content.library.is_favorited && (
          <Action
           title="Add to favorites"
           onAction={() => {
            setFavorite(props.item.content.id, true)
           }}
           shortcut={{ modifiers: ["cmd"], key: "f" }}
           icon={Icon.Star}
          />)}
      </ActionPanel.Section>
    </ActionPanel>
  );
}
