import { useTranslation } from "react-i18next";
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";
import {
  UserIcon,
  UserIconOutline,
} from "../../../../components/UI/IconGenerator/Svg";
import {
  FacebookIcon,
  InstagramIcon,
  OtherPlatformIcon,
  TelegramIcon,
  YoutubeIcon,
} from "../../../../components/UI/IconGenerator/Svg/Socials";

const GetIcon = (type: string) => {
  switch (type) {
    case "do`stimdan":
      return <UserIcon />;
    case "by friend":
      return <UserIcon />;
    case "by instagram":
      return <InstagramIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "by telegram":
      return <TelegramIcon />;
    case "telegram":
      return <TelegramIcon />;
    case "by facebook":
      return <FacebookIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "by youtube":
      return <YoutubeIcon />;
    case "youtube":
      return <YoutubeIcon />;

    default:
      return <OtherPlatformIcon />;
  }
};

const ListItem = ({ classes, element }: { classes?: string; element: any }) => {
  const { t } = useTranslation();
  return (
    <li className={`py-16px px-24px flex space-x-24px w-full ${classes}`}>
      <div>{GetIcon(element.platform)}</div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <span>{t(element.platform)}</span>
          <div className="bg-[var(--primary50)] flex items-center space-x-1 p-6px rounded-full">
            <UserIconOutline />
            <span>{element.count} ta</span>
          </div>
        </div>

        <div className="bg-[var(--gray50)] w-full h-[8px] rounded-[4px] mt-12px">
          <div className="bg-[var(--main500)] w-[10%] h-[8px] rounded-[4px] mt-12px"></div>
        </div>
      </div>
    </li>
  );
};

export const StatisticsList = ({
  socialData,
  isLoading = false,
}: {
  socialData: any;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <div>
        <ListSkeleton count={2} height={300} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="pl-24px text-[var(--gray90)] text-lg font-[600]">
          Yo’lovchilar
        </h3>
        {socialData?.passenger?.length ? (
          <ul>
            {socialData.passenger.map((item: any, index: number) => (
              <ListItem key={index} element={item} classes="pr-24px" />
            ))}
          </ul>
        ) : (
          <div className="flex justify-center my-5">
            <img src="/images/no-data.png" width={200} alt="empty" />
          </div>
        )}
      </div>
      <div>
        <h3 className="pl-24px text-[var(--gray90)] text-lg font-[600]">
          Haydovchilar
        </h3>
        {socialData?.driver?.length ? (
          <ul>
            {socialData.driver.map((item: any, index: number) => (
              <ListItem key={index} element={item} classes="pl-24px" />
            ))}
          </ul>
        ) : (
          <div className="flex justify-center my-5">
            <img src="/images/no-data.png" width={200} alt="empty" />
          </div>
        )}
      </div>
    </div>
  );
};
