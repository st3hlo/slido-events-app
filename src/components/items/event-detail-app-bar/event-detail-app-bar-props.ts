import { RouteComponentProps } from 'react-router-dom';

export interface EventDetailAppBarProps extends RouteComponentProps<{ id: string }> {
    name: string;
};
