import React, { useMemo } from 'react'

import { ApplyStatus, ToolArgs } from '../../types/apply'
import {
	ParsedMsgBlock,
	parseMsgBlocks,
} from '../../utils/parse-infio-block'

import MarkdownApplyDiffBlock from './Markdown/MarkdownApplyDiffBlock'
import MarkdownEditFileBlock from './Markdown/MarkdownEditFileBlock'
import MarkdownFetchUrlsContentBlock from './Markdown/MarkdownFetchUrlsContentBlock'
import MarkdownListFilesBlock from './Markdown/MarkdownListFilesBlock'
import MarkdownMatchSearchFilesBlock from './Markdown/MarkdownMatchSearchFilesBlock'
import MarkdownReadFileBlock from './Markdown/MarkdownReadFileBlock'
import MarkdownReasoningBlock from './Markdown/MarkdownReasoningBlock'
import MarkdownRegexSearchFilesBlock from './Markdown/MarkdownRegexSearchFilesBlock'
import MarkdownSearchAndReplace from './Markdown/MarkdownSearchAndReplace'
import MarkdownSearchWebBlock from './Markdown/MarkdownSearchWebBlock'
import MarkdownSemanticSearchFilesBlock from './Markdown/MarkdownSemanticSearchFilesBlock'
import MarkdownSwitchModeBlock from './Markdown/MarkdownSwitchModeBlock'
import MarkdownToolResult from './Markdown/MarkdownToolResult'
import MarkdownWithIcons from './Markdown/MarkdownWithIcon'
import RawMarkdownBlock from './Markdown/RawMarkdownBlock'
import UseMcpToolBlock from './Markdown/UseMcpToolBlock'

function ReactMarkdown({
	applyStatus,
	onApply,
	children,
}: {
	applyStatus: ApplyStatus
	onApply: (toolArgs: ToolArgs) => void
	children: string
	}) {
	
	const blocks: ParsedMsgBlock[] = useMemo(
		() => parseMsgBlocks(children),
		[children],
	)

	return (
		<>
			{blocks.map((block, index) =>
				block.type === 'thinking' ? (
					<RawMarkdownBlock 
						key={"markdown-" + index} 
						content={block.content}
						className="infio-markdown"
					/>
				) : block.type === 'think' ? (
					<MarkdownReasoningBlock
						key={"reasoning-" + index}
						reasoningContent={block.content}
					/>
				) : block.type === 'write_to_file' ? (
					<MarkdownEditFileBlock
						key={"write-to-file-" + index}
						applyStatus={applyStatus}
						mode={block.type}
						onApply={onApply}
						path={block.path}
						startLine={1}
					>
						{block.content}
					</MarkdownEditFileBlock>
				) : block.type === 'insert_content' ? (
					<MarkdownEditFileBlock
						key={"insert-content-" + index}
						applyStatus={applyStatus}
						mode={block.type}
						onApply={onApply}
						path={block.path}
						startLine={block.startLine}
						endLine={block.startLine} // 插入内容时，endLine 和 startLine 相同
					>
						{block.content}
					</MarkdownEditFileBlock>
				) : block.type === 'search_and_replace' ? (
					<MarkdownSearchAndReplace
						key={"search-and-replace-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						content={block.content}
						operations={block.operations.map(op => ({
							search: op.search,
							replace: op.replace,
							startLine: op.start_line,
							endLine: op.end_line,
							useRegex: op.use_regex,
							ignoreCase: op.ignore_case,
							regexFlags: op.regex_flags,
						}))}
						finish={block.finish}
					/>
				) : block.type === 'apply_diff' ? (
					<MarkdownApplyDiffBlock
						key={"apply-diff-" + index}
						applyStatus={applyStatus}
						mode={block.type}
						onApply={onApply}
						path={block.path}
						diff={block.diff}
						finish={block.finish}
					/>
				) : block.type === 'read_file' ? (
					<MarkdownReadFileBlock
						key={"read-file-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						finish={block.finish}
					/>
				) : block.type === 'list_files' ? (
					<MarkdownListFilesBlock
						key={"list-files-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						recursive={block.recursive}
						finish={block.finish}
					/>
				) : block.type === 'match_search_files' ? (
					<MarkdownMatchSearchFilesBlock
						key={"match-search-files-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						query={block.query}
						finish={block.finish}
					/>
				) : block.type === 'regex_search_files' ? (
					<MarkdownRegexSearchFilesBlock
						key={"regex-search-files-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						regex={block.regex}
						finish={block.finish}
					/>
				) : block.type === 'semantic_search_files' ? (
					<MarkdownSemanticSearchFilesBlock
						key={"semantic-search-files-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						path={block.path}
						query={block.query}
						finish={block.finish}
					/>
				) : block.type === 'attempt_completion' ? (
					<MarkdownWithIcons
						key={"attempt-completion-" + index}
						className="infio-markdown infio-attempt-completion"
						markdownContent={block.result}
						finish={block.finish}
						iconName="attempt_completion"
						iconSize={14}
						iconClassName="infio-markdown-icon"
					/>
				) : block.type === 'ask_followup_question' ? (
					<MarkdownWithIcons
						key={"ask-followup-question-" + index}
						className="infio-markdown infio-followup-question"
						markdownContent={block.question}
						finish={block.finish}
						iconName="ask_followup_question"
						iconSize={14}
						iconClassName="infio-markdown-icon"
					/>
				) : block.type === 'switch_mode' ? (
					<MarkdownSwitchModeBlock
						key={"switch-mode-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						mode={block.mode}
						reason={block.reason}
						finish={block.finish}
					/>
				) : block.type === 'search_web' ? (
					<MarkdownSearchWebBlock
						key={"search-web-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						query={block.query}
						finish={block.finish}
					/>
				) : block.type === 'fetch_urls_content' ? (
					<MarkdownFetchUrlsContentBlock
						key={"fetch-urls-content-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						urls={block.urls}
						finish={block.finish}
					/>
				) : block.type === 'use_mcp_tool' ? (
					<UseMcpToolBlock
						key={"use-mcp-tool-" + index}
						applyStatus={applyStatus}
						onApply={onApply}
						serverName={block.server_name}
						toolName={block.tool_name}
						parameters={block.parameters}
						finish={block.finish}
					/>
				) : block.type === 'tool_result' ? (
					<MarkdownToolResult
						key={"tool-result-" + index}
						content={block.content}
					/>
				) : (
					<RawMarkdownBlock 
						key={"markdown-" + index} 
						content={block.content}
						className="infio-markdown"
					/>
				),
			)}
		</>
	)
}

export default React.memo(ReactMarkdown)
