import { appInfo, type AppId } from "../data/appInfo";

const AppCard = ({ app }: { app: AppId }) => {
  const { name, website } = appInfo[app];

  return (
    <a href={website} target="_blank">
      <div className="flex flex-col items-center p-3 md:p-5 lg:p-8">
        <img
          src={`/images/app-icons/${app}.png`}
          alt={`App Icon:${name}`}
          className="app-icon animate-pulseScale"
        />
        <h3 className="text-contrast">{name}</h3>
      </div>
    </a>
  );
};

export default AppCard;
