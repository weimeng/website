import * as React from "react"

interface navigationItem {
  title: string;
  path: string;
  navigation?: navigationItem[];
}

function parseNavItems(navItems: any): any {
  return(navItems.map((data: navigationItem, index: number) => {
    return(
      <NavigationItem key={`nav_item_${index}`} navItem={data} />
    )
  }))
}

const NavigationList = ({ navItems }: { navItems?: navigationItem[] }) => {
  return (
    <ul className="ml-4">
      {parseNavItems(navItems)}
    </ul>
  )
}

const NavigationItem = ({ navItem }: { navItem: navigationItem }) => {
  return (
    <li>
      <a href={navItem.path}>{navItem.title}</a>

      {"navigation" in navItem &&
        <NavigationList navItems={navItem.navigation} />
      }
    </li>
  )
}

export default NavigationList
