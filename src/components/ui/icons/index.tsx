import React from 'react';
import Add from './Add';
import ArrowCurved from './ArrowCurved';
import ArrowDown from './ArrowDown';
import ArrowForward from './ArrowForward';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUp from './ArrowUp';
import Badge from './Badge';
import Cached from './Cached';
import Check from './Check';
import Checkbox from './Checkbox';
import CheckboxChecked from './CheckboxChecked';
import Cross from './Cross';
import Dot from './Dot';
import DotVertical from './DotVertical';
import Download from './Download';
import Edit from './Edit';
import Email from './Email';
import Facebook from './Facebook';
import Fb from './Fb';
import Forward from './Forward';
import Grid from './Grid';
import Home from './Home';
import I from './I';
import Img from './Img';
import Insta from './Insta';
import Linkdin from './Linkdin';
import Linkedin from './Linkedin';
import List from './List';
import Lock from './Lock';
import Menu from './Menu';
import Mic from './Mic';
import OutgoingPhone from './OutgoingPhone';
import Plus from './Plus';
import Preview from './Preview';
import Print from './Print';
import Profile from './Profile';
import Search from './Search';
import Send from './Send';
import Square from './Square';
import Star from './Star';
import Twitter from './Twitter';
import Twitter2 from './Twitter2';
import Upload from './Upload';
import User from './User';
import VisibilityOff from './VisibilityOff';


export type IconNames =
  | 'user'
  | 'circle-plus'
  | 'cross'
  | 'menu'
  | 'arrow-left'
  | 'arrow-right'
  | 'eye-visible'
  | 'eye-hidden'
  | 'circle-check'
  | 'mic'
  | 'checkbox-checked'
  | 'i'
  | 'list'
  | 'preview'
  | 'arrow-curved'
  | 'arrow-forward'
  | 'arrow-up'
  | 'arrow-down'
  | 'badge'
  | 'fb'
  | 'twitter'
  | 'linkdin'
  | 'insta'
  | 'check'
  | 'grid'
  | 'home'
  | 'star'
  | 'download'
  | 'upload'
  | 'print'
  | 'dot'
  | 'cached'
  | 'send'
  | 'plus'
  | 'forward'
  | 'search'
  | 'img'
  | 'checkbox'
  | 'email'
  | 'lock'
  | 'square'
  | 'profile'
  | 'edit'
  | 'facebook'
  | 'twitter2'
  | 'linkedin'
  | 'outgoinPhone'
  | 'dot-vertical';

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
    case 'send':
      return <Send {...props} />;
    case 'list':
      return <List {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'user':
      return <User {...props} />;
    case 'circle-plus':
      return <Add {...props} />;
    case 'cross':
      return <Cross {...props} />;
    case 'arrow-forward':
      return <ArrowForward {...props} />;
    case 'arrow-up':
      return <ArrowUp {...props} />;
    case 'arrow-down':
      return <ArrowDown {...props} />;
    case 'arrow-left':
      return <ArrowLeft {...props} />;
    case 'arrow-right':
      return <ArrowRight {...props} />;
    case 'mic':
      return <Mic {...props} />;
 
    case 'eye-hidden':
      return <VisibilityOff {...props} />;
    case 'i':
      return <I {...props} />;
    case 'circle-check':
      return <Check {...props} />;
    case 'checkbox-checked':
      return <CheckboxChecked {...props} />;
    case 'arrow-curved':
      return <ArrowCurved {...props} />;
    case 'preview':
      return <Preview {...props} />;
    case 'badge':
      return <Badge {...props} />;
    case 'fb':
      return <Fb {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'linkdin':
      return <Linkdin {...props} />;
    case 'insta':
      return <Insta {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'dot':
      return <Dot {...props} />;
    case 'dot-vertical':
      return <DotVertical {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'cached':
      return <Cached {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'grid':
      return <Grid {...props} />;
    case 'download':
      return <Download {...props} />;
    case 'upload':
      return <Upload {...props} />;
    case 'forward':
      return <Forward {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'img':
      return <Img {...props} />;
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'email':
      return <Email {...props} />;
    case 'lock':
      return <Lock {...props} />;
    case 'square':
      return <Square {...props} />;
    case 'profile':
      return <Profile {...props} />;
    case 'print':
      return <Print {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'edit':
      return <Edit {...props} />;
    case 'twitter2':
      return <Twitter2 {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'outgoingphone':
      return <OutgoingPhone {...props} />;

    default:
      return <span>no icon found with name: {props.name}</span>;
  }
};

export default AssessmentIcon;
