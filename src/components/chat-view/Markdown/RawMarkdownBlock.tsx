import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { useDarkModeContext } from '../../../contexts/DarkModeContext'

import MermaidBlock from './MermaidBlock'
import { MemoizedSyntaxHighlighterWrapper } from './SyntaxHighlighterWrapper'

interface RawMarkdownBlockProps {
	content: string
	className?: string
}

export default function RawMarkdownBlock({
	content,
	className = "infio-markdown",
}: RawMarkdownBlockProps) {
	const {isDarkMode} = useDarkModeContext()

	return (
		<ReactMarkdown
			className={className}
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={{
				code({ className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || '')
					const language = match ? match[1] : undefined
					const isInline = !className
					
					// Mermaid 图表渲染
					if (!isInline && language === 'mermaid') {
						const codeText = String(children || "")
						return (
							<MermaidBlock
								code={codeText}
							/>
						)
					}
					
					// 代码块使用语法高亮
					if (!isInline && language) {
						return (
							<MemoizedSyntaxHighlighterWrapper
								isDarkMode={isDarkMode}
								language={language}
								hasFilename={false}
								wrapLines={true}
							>
								{String(children).replace(/\n$/, '')}
							</MemoizedSyntaxHighlighterWrapper>
						)
					}
					
					// 内联代码使用原生样式
					return <code {...props}>{children}</code>
				},
			}}
		>
			{content}
		</ReactMarkdown>
	)
}
