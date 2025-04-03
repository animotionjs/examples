<script lang="ts">
	import { Action } from '@animotion/core'
	import { fly } from 'svelte/transition'

	let step = $state(0)
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
	<g id="select-list">
		<g id="selected-option">
			<path
				id="selected"
				d="M760 356C760 347.163 767.163 340 776 340H1144C1152.84 340 1160 347.163 1160 356V404C1160 412.837 1152.84 420 1144 420H776C767.163 420 760 412.837 760 404V356Z"
				fill="#3A3A3A"
			/>
			<text
				id="Option C"
				fill="white"
				xml:space="preserve"
				style="white-space: pre"
				font-family="Atkinson Hyperlegible"
				font-size="32"
				font-weight="bold"
				letter-spacing="0em"><tspan x="790" y="390.376">Option C</tspan></text
			>
			<g id="icon">
				<path
					id="Vector"
					d="M1077 376L1087 386L1097 376"
					stroke="white"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
				/>
			</g>
		</g>

		<g id="option-a">
			<path
				id="a"
				d="M760 452C760 443.163 767.163 436 776 436H1144C1152.84 436 1160 443.163 1160 452V516H760V452Z"
				fill="#2C2C2C"
			/>
			<text
				id="Option A"
				fill="white"
				xml:space="preserve"
				style="white-space: pre"
				font-family="Atkinson Hyperlegible"
				font-size="32"
				letter-spacing="0em"><tspan x="894" y="486.376">Option A</tspan></text
			>
		</g>

		<g id="option-b">
			<path id="b" d="M760 520H1160V600H760V520Z" fill="#2C2C2C" />
			<text
				id="Option B"
				fill="white"
				xml:space="preserve"
				style="white-space: pre"
				font-family="Atkinson Hyperlegible"
				font-size="32"
				letter-spacing="0em"><tspan x="895" y="570.376">Option B</tspan></text
			>
		</g>

		<g id="option-c">
			<path id="c" d="M760 604H1160V684H760V604Z" fill="#3A3A3A" />
			<text
				id="Option C_2"
				fill="white"
				xml:space="preserve"
				style="white-space: pre"
				font-family="Atkinson Hyperlegible"
				font-size="32"
				font-weight="bold"
				letter-spacing="0em"><tspan x="893" y="654.376">Option C</tspan></text
			>
		</g>

		<g id="option-d">
			<path
				id="d"
				d="M760 688H1160V752C1160 760.837 1152.84 768 1144 768H776C767.163 768 760 760.837 760 752V688Z"
				fill="#2C2C2C"
			/>
			<text
				id="Option D"
				fill="white"
				xml:space="preserve"
				style="white-space: pre"
				font-family="Atkinson Hyperlegible"
				font-size="32"
				letter-spacing="0em"><tspan x="896" y="738.376">Option D</tspan></text
			>
		</g>
	</g>

	<g id="select-legend">
		{#if step >= 3}
			<g in:fly={{ x: 20, duration: 1000 }} id="picker-icon">
				<text
					id="&lt;select&gt;::picker-icon"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="1268" y="389.376">&lt;select&gt;::picker-icon</tspan></text
				>
				<path
					id="Union"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1057 373C1057 364.163 1064.16 357 1073 357H1104C1112.84 357 1120 364.163 1120 373V381H1252V383H1120V387C1120 395.837 1112.84 403 1104 403H1073C1064.16 403 1057 395.837 1057 387V373ZM1073 359H1104C1111.73 359 1118 365.268 1118 373V387C1118 394.732 1111.73 401 1104 401H1073C1065.27 401 1059 394.732 1059 387V373C1059 365.268 1065.27 359 1073 359Z"
					fill="#FFE342"
				/>
			</g>
		{/if}

		{#if step >= 1}
			<g in:fly={{ y: 20, duration: 1000 }} id="select">
				<text
					id="&lt;select&gt;"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="904" y="243.376">&lt;select&gt;</tspan></text
				>
				<path
					id="Union_2"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M960 331V263H958V331H766C757.163 331 750 338.163 750 347V412C750 420.837 757.163 428 766 428H1153C1161.84 428 1169 420.837 1169 412V347C1169 338.163 1161.84 331 1153 331H960ZM766 333C758.268 333 752 339.268 752 347V412C752 419.732 758.268 426 766 426H1153C1160.73 426 1167 419.732 1167 412V347C1167 339.268 1160.73 333 1153 333H766Z"
					fill="#FF4242"
				/>
			</g>
		{/if}

		{#if step >= 4}
			<g in:fly={{ y: 20, duration: 1000 }} id="select-picker">
				<text
					id="::picker(select)"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="1268" y="486.376">::picker(select)</tspan></text
				>
				<path
					id="Union_3"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M750 447C750 438.163 757.163 431 766 431H1153C1161.84 431 1169 438.163 1169 447V479L1252 479V481L1169 481V758C1169 766.837 1161.84 774 1153 774H766C757.163 774 750 766.837 750 758V447ZM766 433H1153C1160.73 433 1167 439.268 1167 447V758C1167 765.732 1160.73 772 1153 772H766C758.268 772 752 765.732 752 758V447C752 439.268 758.268 433 766 433Z"
					fill="#FF42F2"
				/>
			</g>
		{/if}

		{#if step >= 6}
			<g in:fly={{ x: 20, duration: 1000 }} id="checked">
				<text
					id="&lt;option&gt;:checked"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="1268" y="650.376">&lt;option&gt;:checked</tspan></text
				>
				<path
					id="Union_4"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M756 619C756 610.163 763.163 603 772 603H1147C1155.84 603 1163 610.163 1163 619V641L1252 641V643L1163 643V667C1163 675.837 1155.84 683 1147 683H772C763.163 683 756 675.837 756 667V619ZM772 605H1147C1154.73 605 1161 611.268 1161 619V667C1161 674.732 1154.73 681 1147 681H772C764.268 681 758 674.732 758 667V619C758 611.268 764.268 605 772 605Z"
					fill="#FF4242"
				/>
			</g>
		{/if}

		{#if step >= 5}
			<g in:fly={{ x: -20, duration: 1000 }} id="option">
				<text
					id="&lt;option&gt;"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="528" y="488.376">&lt;option&gt;</tspan></text
				>
				<path
					id="Union_5"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M756 453C756 444.163 763.163 437 772 437H1147C1155.84 437 1163 444.163 1163 453V501C1163 509.837 1155.84 517 1147 517H772C763.163 517 756 509.837 756 501V481L673 481V479L756 479V453ZM772 439H1147C1154.73 439 1161 445.268 1161 453V501C1161 508.732 1154.73 515 1147 515H772C764.268 515 758 508.732 758 501V453C758 445.268 764.268 439 772 439Z"
					fill="#42FFEF"
				/>
			</g>
		{/if}

		{#if step >= 2}
			<g in:fly={{ x: -20, duration: 1000 }} id="selectedcontent">
				<text
					id="&lt;selectedcontent&gt;"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="355" y="389.376">&lt;selectedcontent&gt;</tspan></text
				>
				<path
					id="Union_6"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M770 363C770 354.163 777.163 347 786 347H1026C1034.84 347 1042 354.163 1042 363V397C1042 405.837 1034.84 413 1026 413H786C777.163 413 770 405.837 770 397V383H638V381H770V363ZM786 349H1026C1033.73 349 1040 355.268 1040 363V397C1040 404.732 1033.73 411 1026 411H786C778.268 411 772 404.732 772 397V363C772 355.268 778.268 349 786 349Z"
					fill="white"
				/>
			</g>
		{/if}

		{#if step >= 7}
			<g in:fly={{ x: -20, duration: 1000 }} id="checkmark">
				<text
					id="&lt;option&gt;::checkmark"
					fill="white"
					xml:space="preserve"
					style="white-space: pre"
					font-family="Atkinson Hyperlegible"
					font-size="32"
					letter-spacing="0em"><tspan x="362" y="655.376">&lt;option&gt;::checkmark</tspan></text
				>
				<path
					id="Union_7"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M780 637C780 628.163 787.163 621 796 621H827C835.837 621 843 628.163 843 637V651C843 659.837 835.837 667 827 667H796C787.163 667 780 659.837 780 651V648L673 648V646L780 646V637ZM796 623H827C834.732 623 841 629.268 841 637V651C841 658.732 834.732 665 827 665H796C788.268 665 782 658.732 782 651V637C782 629.268 788.268 623 796 623Z"
					fill="#FFE342"
				/>
			</g>
		{/if}

		<g id="check">
			<path
				id="Vector_2"
				d="M828 633L806 655L796 645"
				stroke="white"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</g>
</svg>

<Action
	actions={[
		() => (step = 1),
		() => (step = 2),
		() => (step = 3),
		() => (step = 4),
		() => (step = 5),
		() => (step = 6),
		() => (step = 7)
	]}
/>
