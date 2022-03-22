import List from './List';

export type IconNames =
| 'list';

export interface IconProps {
  name: string;
  className: string;
  style?: Object;
  fill?: string;
  width?: string | number;
  height?: string | number;
}

const AssessmentIcon = (props: IconProps) => {
  switch (props.name) {
  case 'list':
  return <List {...props} />;
  default:
      return <span>no icon found with name: {props.name}</span>;
  }
};

export default AssessmentIcon;
