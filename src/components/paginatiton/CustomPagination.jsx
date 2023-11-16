import Pagination from "react-bootstrap/Pagination";
const CustomPagination = ({
  pageCount,
  pageSize,
  totalPages,
  lastPage,
  changePage,
}) => {
  return (
    <div className="d-flex align-items-center mt-4">
      <Pagination>
        <Pagination.First
          disabled={pageCount == 0}
          onClick={() => changePage(0, pageSize)}
        />
        <Pagination.Prev
          disabled={pageCount == 0}
          onClick={() => changePage(--pageCount, pageSize)}
        />

        {[...Array(totalPages)].map((item, index) => {
          return (
            <Pagination.Item
              onClick={() => changePage(index, pageSize)}
              active={index == pageCount}
              key={index}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}

        <Pagination.Next
          disabled={lastPage}
          onClick={() => changePage(++pageCount, pageSize)}
        />
        <Pagination.Last
          disabled={lastPage}
          onClick={() => changePage(totalPages - 1, pageSize)}
        />
      </Pagination>
    </div>
  );
};
export default CustomPagination;
