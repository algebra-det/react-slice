import { memo } from 'react'

const NestedCounter = () => {
  console.log('Nested Rendered')
  return <div>NestedCounter</div>
}
const MemoNestedCounter = memo(NestedCounter)
export default MemoNestedCounter
