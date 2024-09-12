import React, { FC, ReactNode, useEffect, useMemo, useCallback } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export type TabEntry = {
  name: string
  view: ReactNode
}

export type TabProps = {
  tabs: Array<TabEntry>
}

/**
 * Tab Component
 *
 * A reusable component that generates a tab interface dynamically based on provided entries.
 * Updated to use the App Router from Next.js 13+ and prevent unwanted scrolling.
 *
 * @param {Array<TabEntry>} tabs - An array of objects containing the tab name and its corresponding page view.
 *
 * @example
 * const tabEntries = [
 *   { name: 'Account', view: <AccountPage /> },
 *   { name: 'Password', view: <PasswordPage /> },
 *   { name: 'Settings', view: <SettingsPage /> },
 * ];
 *
 * <Tab tabs={tabEntries} />
 */

export const Tab: FC<TabProps> = ({ tabs }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const activeTab = useMemo(() => {
    const tabQuery = searchParams.get('tab')
    return (
      tabs.find((tab) => tabQuery === tab.name.toLowerCase())?.name ||
      tabs[0]?.name
    )
  }, [searchParams, tabs])

  const updateUrl = useCallback(
    (newTab: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('tab', newTab.toLowerCase())
      const newUrl = `${pathname}?${newSearchParams.toString()}`
      window.history.pushState(null, '', newUrl)
    },
    [searchParams, pathname],
  )

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.name === activeTab)
    if (
      currentTab &&
      searchParams.get('tab') !== currentTab.name.toLowerCase()
    ) {
      updateUrl(currentTab.name)
    }
  }, [activeTab, tabs, searchParams, updateUrl])

  const handleTabChange = (value: string) => {
    updateUrl(value)
  }

  return (
    <Tabs.Root
      className="flex flex-col w-full h-full"
      value={activeTab}
      defaultValue={tabs[0]?.name || ''}
      onValueChange={handleTabChange}
    >
      <Tabs.List
        className="shrink-0 flex border-b border-mauve6"
        aria-label="Manage your account"
      >
        {tabs.map((tab, index) => (
          <Tabs.Trigger
            key={index}
            className={`bg-white cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md 
                       hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200
                       outline-none ${
                         activeTab === tab.name
                           ? 'bg-purple-100 text-purple-800 font-semibold border-b-2 border-purple-600'
                           : ''
                       }`}
            value={tab.name}
          >
            {tab.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab, index) => (
        <Tabs.Content
          key={index}
          className="grow p-5 bg-white rounded-b-md outline-none"
          value={tab.name}
        >
          {tab.view}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
