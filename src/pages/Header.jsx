import { Text } from 'components';
import React from 'react';

const tags = [
  { id: 1, text: 'Tour' },
  { id: 2, text: 'Prices' },
  { id: 3, text: 'About' },
  { id: 4, text: 'F.A.Q.' },
  { id: 5, text: 'Support' },
];

function Header() {
  return (
    <div>
      <ul className="flex md:flex-1 flex-row sm:hidden items-start justify-between md:ml-[0] ml-[509px] md:mt-0 my-1 w-[37%] md:w-full common-row-list">
        {tags.map((tag) => (
          <li key={tag.id}>
            <a href="javascript:" className="text-base text-gray-900_66">
            <Text size="txtDMSansMedium16">{tag.text}</Text>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
