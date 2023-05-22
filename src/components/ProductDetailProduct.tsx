import { interpolate, useCurrentFrame } from 'remotion'

import { Image } from './Image'
import { ImagesCarousel } from './ImagesCarousel'
import { Rank } from './Rank'

export const ProductDetailProduct = ({ product }) => {
  const { rank, thumbnail, name, topics, description, images, votesCount } =
    product
  const frame = useCurrentFrame()

  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const translate = interpolate(frame, [0, 8], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <div style={{ opacity: opacity, transform: `translateY(${translate}px)` }}>
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex flex-grow items-center gap-4 overflow-hidden">
          <Image src={thumbnail} className="h-20 w-20" />
          <div className="flex-grow">
            <h2 className="mb-1 text-3xl font-medium leading-8 text-gray-800 line-clamp-2">
              {name}
            </h2>
            <div className="overflow-fadeout-right flex items-center gap-1">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="box-border flex-shrink-0 rounded border border-gray-400 bg-gray-50 px-2 py-1 text-sm text-gray-500"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Rank rank={rank} />
          <div className="flex gap-2 rounded border border-[#db4200] bg-[#f64900] py-1 px-2 text-center text-white">
            <p className="text-xl font-semibold">▲</p>
            <p className="text-xl font-semibold">{votesCount}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-2xl leading-7 text-gray-700 line-clamp-3">
          {description}
        </p>
      </div>

      <ImagesCarousel images={images} />
    </div>
  )
}
