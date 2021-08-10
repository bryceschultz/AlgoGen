import Select from 'react-select';
import { colourOptions } from '/data';
import { Note } from '/styled-components';

const Checkbox = props => <input type="checkbox" {...props} />;

type State = {
  isClearable: boolean,
  isDisabled: boolean,
  isLoading: boolean,
  isRtl: boolean,
  isSearchable: boolean,
};

export default class SingleSelect extends Component<*, State> {
  state = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  };
}