import '../css//App.css';
import HeaderBoldCenter from './labels/HeaderBoldCenter';
import ListButtonWithIcon from './navs/ListButtonWithIcon';
import { ReactComponent as YouTubeLogo } from '../img/youtube.svg';
import { ReactComponent as VKLogo } from '../img/vk.svg';
import { ReactComponent as RuTubeLogo } from '../img/rutube.svg';

function Videos() {
  return (
    <div className="container">
      <HeaderBoldCenter name="Познавательные ролики" key="videos" />
      <div className="container mt-3 mb-3">
        <ListButtonWithIcon
          displayName="YouTube"
          link="https://www.youtube.com/channel/UCKziH5v62PIeqmjxzZo0WFA/featured"
          key="youtube"
          external="true"
        >
          <YouTubeLogo className="Social-logo-inline" />
        </ListButtonWithIcon>
        <ListButtonWithIcon
          displayName="RuTube"
          link="https://rutube.ru/channel/24958058"
          key="rutube"
          external="true"
        >
          <RuTubeLogo className="Social-logo-inline" />
        </ListButtonWithIcon>
        <ListButtonWithIcon
          displayName="ВКонтакте"
          link="https://vk.com/video/@bimbimon"
          key="vk"
          external="true"
        >
          <VKLogo className="Social-logo-inline" />
        </ListButtonWithIcon>
      </div>
    </div>
  );
}

export default Videos;
