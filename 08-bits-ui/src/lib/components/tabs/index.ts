import TabsComponent from './tabs.svelte'
import Item from './tab-item.svelte'

type Tabs = typeof TabsComponent & { Item: typeof Item }

const Tabs: Tabs = Object.assign(TabsComponent, { Item })

export default Tabs
