// material icons
import { SvgIconComponent } from '@material-ui/icons';

// material components
import CodeIcon from '@material-ui/icons/CodeOutlined';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import DevicesIcon from '@material-ui/icons/DevicesOutlined';

export interface IData {
  id: number;
  Icon: SvgIconComponent;
  header: string;
  body: string | string[];
}

const data: IData[] = [
  {
    id: 1,
    Icon: CodeIcon,
    header: 'Application Support',
    body: [
      'We offer end-to-end support for the U.S. teacher exchange program, including resume creation, transcript evaluation, and financial documentation handling.',

    ],
  },
  {
    id: 2,
    Icon: DevicesIcon,
    header: 'Visa Support',
    body:
      'We offer personalized visa coaching, guiding you through Embassy procedures, document requirements, and passport retrieval for a seamless transition to the U.S.',
  },
  {
    id: 3,
    Icon: AssignmentIcon,
    header: 'Career Coaching',
    body:
      'Our advisors provide strategic career coaching, leveraging hiring insights and job market trends to help you secure your ideal American teaching role.',
  },
];

export { data };
