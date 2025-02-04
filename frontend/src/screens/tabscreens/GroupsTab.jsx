import React from 'react';
import VerticalList from 'components/entries/VerticalList';

export default function GroupsTab() {
	return <VerticalList useFilters useSearchBar apiModule='groups' />;
}
