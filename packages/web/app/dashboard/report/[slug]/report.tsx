'use client'
import { Button } from '@/components/ui'
import { FaCalendar, FaClock, FaUserAstronaut } from 'react-icons/fa6'
import { ReportMainSection } from './section'
import dayjs from 'dayjs'
import dayjsutc from 'dayjs/plugin/utc'
import { useEffect, useMemo } from 'react';
import { Icon } from '@iconify/react'
import Link from 'next/link'

dayjs.extend(dayjsutc)

export default function ReportSection({ reportData }: { reportData: any }) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard')
  }

  return (
    <>
      <div className="shadow border-b-2 border-white/[0.2] dark:bg-gray-950/[0.7]">
        <div className="flex flex-col max-w-screen-lg w-full mx-auto py-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <Link href={`/dashboard`} className="text-xs flex items-center mb-2">
                <Icon icon="uil:arrow-left" className="text-lg" />
                <span>back</span>
              </Link>
              <h2 className="font-semibold text-2xl">{reportData?.exercise?.name}</h2>
            </div>
            <div>
              <Button onClick={() => copyLink()}>Share</Button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xs text-gray-500 flex">
              <FaCalendar />
              <span className="ml-1">{reportData?.report?.startTime}</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <FaClock />
              <span className="ml-1">17:39</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <FaUserAstronaut />
              <span className="ml-1">viandwi24</span>
            </div>
          </div>
        </div>
      </div>
      <ReportMainSection data={reportData} />
    </>
  )
}