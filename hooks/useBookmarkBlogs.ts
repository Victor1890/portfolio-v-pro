import { useEffect, useState } from "react";
import { FrontMatter } from "@lib/types";
import { IArticleDevTo } from "@provider/dev.to/devto.interface";

const useBookmarkBlogs = (key: string, defaultValue: []) => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState((): IArticleDevTo[] => {
    let currentValue: IArticleDevTo[] = [];

    try {
      currentValue = JSON.parse(localStorage.getItem(key)!);
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  function getValue() {
    const data = JSON.parse(localStorage.getItem(key)!);
    if (data === null) {
      localStorage.setItem(key, JSON.stringify([]));
      return JSON.parse(localStorage.getItem(key)!);
    }
    return data;
  }

  function addToBookmark(blogToBookmark: FrontMatter) {
    const data = getValue();
    if (!data.includes(blogToBookmark)) {
      data.unshift(blogToBookmark); // add blog to the starting of the array
      setBookmarkedBlogs(data);
    }
  }

  function removeFromBookmark(blogToRemove: string) {
    const data = getValue();
    setBookmarkedBlogs(
      data.filter((blog: FrontMatter) => blog.slug != blogToRemove)
    );
  }

  function isAlreadyBookmarked(searchBySlug: string) {
    return bookmarkedBlogs
      ?.map(
        (bookmarkedBlog: IArticleDevTo) =>
          bookmarkedBlog.slug === searchBySlug
      )
      .includes(true);
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(bookmarkedBlogs));
  }, [bookmarkedBlogs, key]);

  return {
    bookmarkedBlogs,
    addToBookmark,
    removeFromBookmark,
    isAlreadyBookmarked,
  };
};

export default useBookmarkBlogs;
