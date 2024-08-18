import React from 'react'
import Image from 'next/image'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const payload = await getPayloadHMR({
  config,
})
const data = await payload.find({
  collection: 'pages',
})
export default async function Home() {
  console.log('🚀 ~ Home ~ data:', data)
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div>
          {data.docs.map((page) => (
            <div key={page.id}>
              <ul className="list-disc">
                <li>
                  <h2>{page.title}</h2>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
