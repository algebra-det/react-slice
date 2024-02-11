import { FormEvent } from "react"

function Form() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!(e.target instanceof HTMLFormElement)) return; // Typescript safety; otherwise typescript will scream
    const form = new FormData(e.target)
    const values = Object.fromEntries(form.entries())
    console.log('Values: ', values)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            type="text"
            name="username"
            placeholder="Username"
            className="h-12 border rounded p-4"
          />
          </div>
        <div className="mt-2">
          <input
            required
            type="email"
            name="email"
            placeholder="email@example.com"
            className="h-12 border rounded p-4"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          />
          </div>
        <div className="mt-2">
          <input
            required
            type="password"
            name="password"
            placeholder="*********"
            className="h-12 border rounded p-4"
          />
        </div>
        <div className="mt-6 text-white">
          <button className="w-full p-2 border rounded," type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
