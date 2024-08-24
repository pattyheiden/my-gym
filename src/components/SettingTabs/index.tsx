'use client'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useState } from 'react'
import Link from 'next/link'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('home')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className='w-full' type='scroll'>
        <ScrollArea.Viewport className='w-full overflow-x-scroll'>
          <Tabs.List className='mt-6 flex w-full items-center gap-4'>
            <Link href="/"><TabItem value='home' isSelected={currentTab === 'home'} title='Home' /></Link>
            <Link href="/aulas-coletivas"><TabItem value='aulas_coletivas' isSelected={currentTab === 'aulas_coletivas'} title='Aulas Coletivas' /></Link>
            <Link href="/sobre"><TabItem value='sobre' isSelected={currentTab === 'sobre'} title='Sobre a UX Multifit' /></Link>
            <Link href="/contato"><TabItem value='tab5' isSelected={currentTab === 'tab5'} title='Contato' /></Link>
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation='horizontal' className='flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100'>
          <ScrollArea.Thumb className='relative flex-1 rounded-lg bg-zinc-300' />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}