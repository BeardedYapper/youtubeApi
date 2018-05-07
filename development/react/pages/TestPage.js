import React from 'react';
import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';
import Box from '../controls/Box/Box';
import BoxHeader from '../controls/Box/BoxHeader';
import BoxBody from '../controls/Box/BoxBody';
import BoxFooter from '../controls/Box/BoxFooter';

class TestPage extends React.Component {
	render() {
		return (
			<Page>
				<PageHeader title="Test" subtitle="Preview sample"/>
				<PageBody>
					<Box>
						<BoxHeader title='BoxHeader'>
							<div className='row'>
								<div className='col-sm-6'>Tool 1</div>
								<div className='col-sm-6'>Tool 2</div>
							</div>
						</BoxHeader>
						<BoxBody>
							BoxBody
						</BoxBody>
						<BoxFooter>
							BoxFooter
						</BoxFooter>
					</Box>
				</PageBody>
			</Page>
		);
	}
}

module.exports = TestPage;
