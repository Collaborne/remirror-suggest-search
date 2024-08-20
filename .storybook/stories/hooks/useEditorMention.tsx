import { Chip } from '@mui/material';
import { useMemo } from 'react';

export const SOURCES = [
	{ id: 'source1', name: 'first source...' },
	{ id: 'source2', name: 'second source...' },
	{ id: 'source3', name: 'third source...' },
];

export const TAGS = [
	{ id: 'de', name: 'Germany', color: 'yellow' },
	{ id: 'uk', name: 'United Kingdom', color: 'green' },
	{ id: 'fr', name: 'France', color: 'red' },
	{ id: 'it', name: 'Italy', color: 'orange' },
	{ id: 'es', name: 'Spain', color: 'purple' },
	{ id: 'ua', name: 'Ukraine', color: 'brown' },
	{ id: 'po', name: 'Poland', color: 'pink' },
	{ id: 'ru', name: 'Russia', color: 'turquoise' },
	{ id: 'ro', name: 'Romania', color: 'blue' },
	{ id: 'nl', name: 'Netherlands', color: 'raspberry' },
	{ id: 'be', name: 'Belgium', color: 'navy' },
	{ id: 'gr', name: 'Greece', color: 'turquoise' },
	{ id: 'pr', name: 'Portugal', color: 'lime' },
	{
		id: 'xxl',
		name: 'Very, very, very, very, very, very, very, very, very, long',
		color: 'red',
	},
];

export const USERS = [
	{
		id: 'HbaFknIE41FDU3iewdQqt',
		name: 'Aparna Balasubramanian',
		image: 'qa/users/public/-ZIh7AeaX3fu_mE4c8YCJ-70',
	},
	{
		id: '66585acb-87c0-463a-9853-f6ff67b5f0ce',
		name: 'Idriss Mahjoubi',
		image: null,
	},
	{
		id: '3f67fe2d-4158-4362-a857-24fd0ff21835',
		name: 'Oluwaseun',
		image: 'qa/users/public/-ZIh7AeaX3fu_mE4c8YCJ-70',
	},
	{
		id: 'saml_andreas@nextapp3.onmicrosoft.com',
		name: 'Andreas',
		image: 'qa/users/public/J6ac-jKDdW_gNf7-tLGGc-70',
	},
	{
		id: 'c3ea0b37-101b-49e2-b820-cc15de8fac86',
		name: 'Ion Bragaru',
		image: null,
	},
	{
		id: '34b27080-426e-4bd4-96fc-f24aea533bd4',
		name: 'Dmitriy Kulbakov',
		image: null,
	},
	{
		id: 'saml_rick@nextapp3.onmicrosoft.com',
		name: 'Rick',
		image: null,
	},
	{
		id: 'ad5da613-a5f7-47ee-9015-5dcc723bbd14',
		name: 'Will',
		image: 'qa/users/public/-LkCDJBxqTyNqBoNmDyH9-70',
	},
	{
		id: 'EjMHYCy7Ic8z1KheMmBta',
		name: 'Mark Gorman',
		image: null,
	},
	{
		id: 'saml_ronny@nextapp3.onmicrosoft.com',
		name: 'Ronny',
		image: null,
	},
	{
		id: '84fa553e-6546-4ec8-bb0f-c7a94e0c2cda',
		name: 'Erhan',
		image: 'qa/users/public/B1abKi4nFRTXG3zKhZyZg-70',
	},
	{
		id: '1a1a289f-7447-4c0f-9fa9-7d702955bd05',
		name: 'Mahdi Moghaddam',
		image: null,
	},
	{
		id: '670b0ec2-2768-46a4-8572-2ae3cb71f726',
		name: 'Rick',
		image: null,
	},
];

export function useEditorMention() {
	const renderTag = (params: { id: string }) => {
		const tag = TAGS.find(t => t.id === params.id);

		if (!tag) {
			const unknownTag = {
				id: params.id,
				name: 'unknown',
			};

			return <Chip label={unknownTag.name} size="small" />;
		}

		return <Chip label={tag.name} size="small" />;
	};
	const renderLabel = (params: { id: string }) => {
		return <Chip variant="filled" size="small" label={params.id} />;
	};
	const renderDate = (params: { label: string }) => {
		return <Chip variant="filled" size="small" label={params.label} />;
	};

	const renderUser = (params: { id: string }) => {
		const user = USERS.find(u => u.id === params.id);
		return (
			<Chip
				label={user?.name}
				size="small"
				variant="filled"
			/>
		);
	};

	const renderSource = (params: { label: string }) => {
		return <span style={{ fontWeight: 600 }}>{params.label}</span>;
	};

	const userOptions = useMemo(
		() =>
			USERS.map(({ id, image, name: label = 'unknown' }) => ({
				id,
				image,
				label,
				name: 'creator',
			})),
		[],
	);

	const tagOptions = useMemo(
		() =>
			TAGS.map(({ id, color, name: label }) => ({
				id,
				color,
				label,
				name: 'tag',
			})),
		[],
	);
	const recordingLabelOptions = useMemo(
		() => [
			{ id: 'marketing', label: 'marketing', name: 'recording.label' },
			{ id: 'product', label: 'product', name: 'recording.label' },
			{ id: 'sales', label: 'sales', name: 'recording.label' },
			{ id: 'ux', label: 'ux', name: 'recording.label' },
		],
		[],
	);
	const dateOptions = useMemo(
		() => [
			{
				id: 'now_sub_13w-now',
				label: 'last 3 months',
				name: 'date',
			},
		],
		[],
	);

	return {
		renderTag,
		renderLabel,
		renderUser,
		renderSource,
		renderDate,
		userOptions,
		dateOptions,
		recordingLabelOptions,
		tagOptions,
	};
}
