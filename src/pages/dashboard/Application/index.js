import React from 'react';
import ApplicationTable from './components/table/table';

const users = [
  {
    id: 1,
    fullName: 'Mirzayev Mirza Mirzayevich',
    email: 'mirzabek1999@mail.ru',
    phone: '+998 90 007 70 10',
    medName: 'Polikilinika ',
  },
  {
    id: 2,
    fullName: 'Botiryev Botir Botiryevich',
    email: 'botirbek1999@mail.ru',
    phone: '+998 90 007 70 10',
    medName: 'xususiy Polikilinika ',
  },
  {
    id: 3,
    fullName: 'Beruniyev Beruniy Beruniyevich',
    email: 'beruniybek1999@mail.ru',
    phone: '+998 90 291 79 19',
    medName: 'respublikanki bolnisa',
  },
  {
    id: 4,
    fullName: 'Boyka boykayev',
    email: 'boyka0101@mail.ru',
    phone: '+998 90 200 00 10',
    medName: 'Toshmi',
  },
  {
    id: 5,
    fullName: 'Mirzayev Mirza Mirzayevich',
    email: 'mirzabek1999@mail.ru',
    phone: '+998 90 007 70 10',
    medName: 'Polikilinika ',
  },
  {
    id: 6,
    fullName: 'Botiryev Botir Botiryevich',
    email: 'botirbek1999@mail.ru',
    phone: '+998 90 007 70 10',
    medName: 'Nevropotoplog & terapevt ',
  },
  {
    id: 7,
    fullName: 'Beruniyev Beruniy Beruniyevich',
    email: 'beruniybek1999@mail.ru',
    phone: '+998 90 291 79 19',
    medName: 'Xirurgiya markaziy',
  },
  {
    id: 8,
    fullName: 'Boyka boykayev',
    email: 'boyka0101@mail.ru',
    phone: '+998 90 200 00 10',
    medName: 'Polikilinika ',
  },
];
const Application = () => {
  return (
    <>
    <ApplicationTable users = {users} />
    </>
  );
};

export default Application;
