import { List } from "@raycast/api";

export function FavoritesDropdown(props: any) {

    const drinkTypes: any[] = [
        { id: "1", name: "All" },
        { id: "2", name: "Favorites" },
    ];

    return (
        <List.Dropdown
            tooltip="Test"
            storeValue={true}
            onChange={(newValue) => {
                props.filterSelection(newValue)
            }}
        >
            <List.Dropdown.Section>
                {drinkTypes.map((drinkType) => (
                    <List.Dropdown.Item key={drinkType.id} title={drinkType.name} value={drinkType.id} />
                ))}
            </List.Dropdown.Section>
        </List.Dropdown>
    );

}
