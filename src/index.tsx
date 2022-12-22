import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { getQueue } from "./matterApi";

export default function Command() {

  getQueue()

  return (
    <List>
      <List.Item title="Item 1" />
      <List.Item title="Item 2" subtitle="Optional subtitle" />

    </List>
  );
}
