const Datatable = () => {
  return (
    <div className="text-white">
      <table className='border-2 w-full border-slate-300 text-center'>
        <tr>
          <th className='border-2 border-slate-300'>First</th>
          <th className='border-2 border-slate-300'>second</th>
          <th className='border-2 border-slate-300'>Third</th>
        </tr>
        <tr>
          <td className='border-2 border-slate-300 text-slate-200'>first</td>
          <td className='border-2 border-slate-300 text-slate-200'>second</td>
          <td className='border-2 border-slate-300 text-slate-200'>third</td>
        </tr>
      </table>
    </div>
  )
}

export default Datatable
