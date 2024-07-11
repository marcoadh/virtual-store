interface NavButtonProps {
  title: string;
  link: string;
}

function NavButton({ title, link }: NavButtonProps) {
  return (
    <li className="nav-li">
      <a className="nav-a" href={link}>{title}</a>
    </li>
  )
}

export default NavButton