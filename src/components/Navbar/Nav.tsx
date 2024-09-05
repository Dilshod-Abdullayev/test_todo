import Logo from './Logo'
import Mode from './Mode'

export default function Nav() {
  return (
    <div className='text-slate-900 dark:text-yellow-50 dark:bg-slate-900 dark:shadow-2xl flex justify-around align-middle items-center border-red-100'>
        <Logo/>
        <Mode/>
    </div>
  )
}
