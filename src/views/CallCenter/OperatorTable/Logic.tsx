import usePageRouter from "../../../hooks/useObjectRouter";
import {
  DownloadIcon,
  PlayIcon,
  ListIcon,
  EyeIcon,
} from "../../../components/UI/IconGenerator/Svg";

export const TableActions = () => {
  const { navigateQuery } = usePageRouter();

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
            <button
              onClick={() =>
                navigateQuery({ modal: "call_audio", user_id: id })
              }
            >
              <PlayIcon />
            </button>
            <button>
              <DownloadIcon />
            </button>
            <button
              onClick={() => navigateQuery({ modal: "note", user_id: id })}
            >
              <ListIcon />
            </button>
            <button>
              <EyeIcon />
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
