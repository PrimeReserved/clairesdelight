interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
  }  


export default function Pagination({ currentPage, totalPages, onNextPage, onPreviousPage }: Readonly<PaginationProps>) {
    return (
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border ${currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-white text-blue-500'}`}
        >
          Previous
        </button>
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border ${currentPage === totalPages ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-white text-blue-500'}`}
        >
          Next
        </button>
      </div>
    );
  }