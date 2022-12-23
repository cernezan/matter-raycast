import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { useEffect, useState } from "react";
import { getQueue } from "./matterApi";


interface State {
  items?: any;
  error?: Error;
}

export default function Command() {


  const [state, setState] = useState<State>({})

  useEffect(() => {
    async function fetchQueue() {
      try {
        const items = await getQueue()
        setState({ items })
      } catch (error) {
        setState({
          error: error instanceof Error ? error : new Error('Something went wrong'),
        })
      }
    }

    fetchQueue()
  }, [])

  console.log(state, "HEREE")

  return (
    <List isLoading={!state}>
      {state.items?.feed.map((item: any) => (
        <List.Item title={item.content.title} />
      ))}

    </List>
  );
}
