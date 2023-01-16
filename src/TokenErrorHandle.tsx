import { ActionPanel, Action, Detail, openCommandPreferences } from "@raycast/api";

export default function Command() {
    const markdown = "API key incorrect. Please update it in extension preferences and try again. More info on how to get your Matter token [here](https://www.raycast.com/zan/matter). Once you have your token, you can update it in the extension preferences by pressing enter.";

    return (
        <Detail
            markdown={markdown}
            actions={
                <ActionPanel>
                    <Action title="Open Extension Preferences" onAction={openCommandPreferences} />
                </ActionPanel>
            }
        />
    );
}