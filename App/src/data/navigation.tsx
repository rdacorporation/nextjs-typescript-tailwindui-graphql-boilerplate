import { faTachometerAlt, faProjectDiagram, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Navigation {
  title: string;
  icon?: JSX.Element;
  defaultOpen?: boolean;
  current?: boolean;
  url?: string;
  target?: string;
  children?: Navigation[];
}

const navigation: Navigation[] = [
  { title: 'Dashboard', icon: <FontAwesomeIcon icon={faTachometerAlt} />, current: true, url: '/' },
  { title: 'Flow Designer', icon: <FontAwesomeIcon icon={faProjectDiagram} />, current: true, url: '/flow_designer' },
  { title: 'Node Editor', icon: <FontAwesomeIcon icon={faFileCode} />, current: true, url: '/node_editor' },
];

export default navigation;
