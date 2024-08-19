import { createThemeOptions } from '@collaborne/carrot-styles';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StoryContext } from '@storybook/addons';

const lightTheme = createTheme(createThemeOptions(false));
const darkTheme = createTheme(createThemeOptions(true));

// Known issues: storybook throws a warning "an uncontrolled input of type checkbox"
// @see https://github.com/storybookjs/storybook/issues/10967

const darkModeToTheme = {
	dark: darkTheme,
	light: lightTheme,
};

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
export const withTheme = (Story: any, context: StoryContext) => {
	const theme = darkModeToTheme[context.globals.theme];
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div
				style={{
					backgroundColor: theme.palette.background.default,
					color: theme.palette.text.primary,
					padding: theme.spacing(3),
				}}
			>
				<Story {...context} />
			</div>
		</ThemeProvider>
	);
};
