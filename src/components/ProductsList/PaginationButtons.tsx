import { useAppStore } from "@/stores/app-store";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationButtonsProps {
  productsNumber: number;
}

export default function PaginationButtons(props: PaginationButtonsProps) {
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);

  const { productsNumber } = props;
  let pageNumber = Math.ceil(productsNumber / 4);

  return (
    <Stack spacing={4} sx={{ margin: 2 }}>
      <Pagination
        defaultPage={1}
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
