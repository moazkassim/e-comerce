import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface PaginationButtonsProps {
  productsNumber: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function PaginationButtons(props: PaginationButtonsProps) {
  const { productsNumber, setCurrentPage } = props;
  let pageNumber = Math.ceil(productsNumber / 4);

  return (
    <Stack spacing={4} sx={{ margin: 2 }}>
      {/* {arr.map((ele) => {
        return (
          <Button
            sx={{
              maxWidth: "10px",
              color: "white",
              // bgcolor: "black",
            }}
            variant="contained"
            key={ele}
            onClick={() => setCurrentPage(ele - 1)}
          >
            {ele}
          </Button>
        );
      })} */}
      <Pagination
        count={pageNumber}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => {
          setCurrentPage(value - 1);
        }}
      />
    </Stack>
  );
}
