import usePageRouter from "../../../../../../hooks/useObjectRouter";
import {
  DownloadIcon,
  PlayIcon,
  ListIcon,
} from "../../../../../../components/UI/IconGenerator/Svg";
import { useGetQueries } from "../../../../../../hooks/useGetQueries";
import { AudioModal } from "../AudioModal";
import { NoteModal } from "../NoteModal";

export const TableActions = () => {
  const { navigateQuery } = usePageRouter()
  const headColumns = [
    {
      title: "Vaqti",
      id: "date",
    },
    {
      title: "kim",
      id: "who",
    },
    {
      title: "status",
      id: "status",
    },
    {
      title: "qo'n'giroq",
      id: "phone",
    },
    {
      title: "lead - sabablari",
      id: "lead",
    },
    {
      title: "",
      id: "id",
      render: (id: any) => {
        return id ? (
          <div className="space-x-4">
            <button onClick={() => navigateQuery({ modal: "call_audio", user_id: id })}>
              <PlayIcon />
            </button>
            <button>
              <DownloadIcon />
            </button>
            <button>
              <ListIcon />
            </button>
          </div>
        ) : (
          ""
        );
      },
    },
  ];

  return { headColumns };
};

export const TableButtonActions = () => {
  const query = useGetQueries();
  switch (query.modal) {
    case "call_audio":
      return <AudioModal />;
    case "note":
      return <NoteModal />;
    default:
      return "";
  }
};
