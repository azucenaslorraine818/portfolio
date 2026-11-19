import meta from './imageMeta.json'

/** Returns { src, width, height } for an optimized image in /public/images. */
export function img(name) {
  const m = meta[name]
  return { src: `/images/${name}`, width: m?.w, height: m?.h }
}
