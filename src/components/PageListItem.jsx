function PageListItem({ page }) {
  return (
    <li className="teko text-[2.5rem] md:text-[3rem] text-center">
      <a className="hover:text-white hover:underline" href={page.link}>
        {page.name}
      </a>
    </li>
  );
}

export default PageListItem;
