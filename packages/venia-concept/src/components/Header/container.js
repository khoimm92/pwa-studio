import { connect } from 'react-redux';

import Header from './header';
import { toggleSearch, toggleCompare } from 'src/actions/app';

const mapStateToProps = ({ app }) => {
    const { searchOpen, compareOpen } = app;
    return {
        searchOpen, compareOpen
    };
};

const mapDispatchToProps = { toggleSearch, toggleCompare };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
