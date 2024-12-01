import {remark} from 'remark'
import remarkParse from 'remark-parse'
import remarkReferenceLinks from 'remark-reference-links'
import remarkSmartypants from 'remark-smartypants'
import remarkStringify from 'remark-stringify'
import {read} from 'to-vfile'
import { unified } from 'unified'

const file = await unified()
  .use(remarkParse)
  .use(remarkReferenceLinks)
  .use(remarkStringify)
  .process(await read('example.md'))

console.log(String(file))