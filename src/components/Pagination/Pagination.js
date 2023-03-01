import ReactPaginate from "react-paginate";

export const Pagination = ({ totalPage, setTotalPage }) => {
  return (
    <ReactPaginate
      className="flex items-center justify-center gap-5 my-10"
      pageCount={totalPage}
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName="button"
      nextClassName="button"
      pageClassName="button pagination"
      activeClassName="active"
      onPageChange={(data) => {
        setTotalPage(data.selected + 1);
      }}
    />
  );
};
