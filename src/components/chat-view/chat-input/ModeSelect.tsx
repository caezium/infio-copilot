import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown, ChevronUp, MessageSquare, SquarePen, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { useSettings } from '../../../contexts/SettingsContext'
import { useCustomModes } from '../../../hooks/use-custom-mode'
import { defaultModes } from '../../../utils/modes'
import { onEnt } from '../../../utils/web-search'

export function ModeSelect() {
	const { settings, setSettings } = useSettings()
	const [isOpen, setIsOpen] = useState(false)
	const [mode, setMode] = useState(settings.mode)

	const { customModeList } = useCustomModes()

	const allModes = useMemo(() => [...defaultModes, ...customModeList], [customModeList])

	useEffect(() => {
		onEnt(`switch_mode/${settings.mode}`)
		setMode(settings.mode)
	}, [settings.mode])

	// 为默认模式定义快捷键提示
	const getShortcutText = (slug: string) => {
		switch (slug) {
			case 'write':
				return 'Ctrl+Shift+.'
			case 'ask':
				return 'Ctrl+Shift+,'
			case 'research':
				return 'Ctrl+Shift+/'
			default:
				return null
		}
	}

	// 为默认模式定义图标
	const getModeIcon = (slug: string) => {
		switch (slug) {
			case 'ask':
				return <MessageSquare size={14} />
			case 'write':
				return <SquarePen size={14} />
			case 'research':
				return <Search size={14} />
			default:
				return null
		}
	}


	return (
		<>
			<DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
				<DropdownMenu.Trigger className="infio-chat-input-mode-select">
					<span className="infio-mode-icon">{getModeIcon(mode)}</span>
					<div className="infio-chat-input-mode-select__model-name">
						{allModes.find((m) => m.slug === mode)?.name}
					</div>
					<div className="infio-chat-input-mode-select__icon">
						{isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
					</div>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content
						className="infio-popover infio-mode-select-content">
						<ul>
							{allModes.map((mode) => {
								const shortcut = getShortcutText(mode.slug)
								const icon = getModeIcon(mode.slug)

								return (
									<DropdownMenu.Item
										key={mode.slug}
										onSelect={() => {
											setMode(mode.slug)
											setSettings({
												...settings,
												mode: mode.slug,
											})
										}}
										asChild
									>
										<li className="infio-mode-item">
											<div className="infio-mode-left">
												{icon && (
													<span className="infio-mode-icon">{icon}</span>
												)}
												<span className="infio-mode-name">{mode.name}</span>
											</div>
											{shortcut && (
												<span className="infio-mode-shortcut">{shortcut}</span>
											)}
										</li>
									</DropdownMenu.Item>
								)
							})}
						</ul>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
			<style >{`
				button.infio-chat-input-mode-select {
					background-color: var(--background-modifier-hover);
					box-shadow: none;
					border: 1;
					padding: var(--size-4-1) var(--size-4-2);
					font-size: var(--font-smallest);
					font-weight: var(--font-medium);
					color: var(--text-muted);
					display: flex;
					justify-content: flex-start;
					align-items: center;
					cursor: pointer;
					height: var(--size-4-4);
					max-width: 100%;
					gap: var(--size-2-2);
					border-radius: var(--radius-m);
					transition: all 0.15s ease-in-out;

					&:hover {
						color: var(--text-normal);
						background-color: var(--background-modifier-hover);
					}

					.infio-chat-input-mode-select__mode-icon {
						flex-shrink: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						color: var(--text-accent);
					}

					.infio-chat-input-mode-select__model-name {
						flex-shrink: 1;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						flex-grow: 1;
					}

					.infio-chat-input-mode-select__icon {
						flex-shrink: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: auto;
					}
			 }

			 .infio-mode-select-content {
				min-width: auto !important;
				width: fit-content !important;
				max-width: 200px;
			 }

			 .infio-mode-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				padding: var(--size-4-2) var(--size-4-2);
				white-space: nowrap;
			 }

			 .infio-mode-left {
				display: flex;
				align-items: center;
				gap: var(--size-2-2);
			 }

			 .infio-mode-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--text-accent);
				flex-shrink: 0;
			 }

			 .infio-mode-name {
				flex-shrink: 0;
			 }

			 .infio-mode-shortcut {
				font-size: var(--font-smallest);
				color: var(--text-muted);
				background-color: var(--background-modifier-border);
				padding: var(--size-2-1) var(--size-2-2);
				border-radius: var(--radius-s);
				font-family: var(--font-monospace);
				flex-shrink: 0;
			 }
			`}</style>
		</>
	)
}
