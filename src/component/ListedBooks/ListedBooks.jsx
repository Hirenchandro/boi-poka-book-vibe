import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const readBookList = allBooks.filter((book) =>
      storedReadList.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h1 className="text-2xl my-4">Here Listed books</h1>
      <Tabs>
        <TabList>
          <Tab>Listed Read Book</Tab>
          <Tab>Wish Listed Book</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1{readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
