import {
	statisticData,
} from '../data'
import { chooseIcon, calculateStatistic } from '../helpers'

const statisticList = document.querySelector('.render-statistic')

export function renderStatistic() {
	try {
		calculateStatistic()

		const markup = statisticData.reduce((acc, stat) => {
			const icon = chooseIcon(stat.category);
			if (stat.active === 0 && stat.archived === 0) {
				return acc + '';
			}
			return acc + `
				<li class="table__item">
					<ul class="table-row">
						<li class="table-row__item">
							<div class="icon-wrapper">
								<svg class="table-icon" width="24" height="24">
									<use href="${icon}"></use>
								</svg>
							</div>
							<span>${stat.category}</span>
						</li>
						<li class="table-row__item">${stat.active}</li>
						<li class="table-row__item">${stat.archived}</li>
					</ul>
				</li>
			`
		}, '')

		statisticList.innerHTML = markup;
	} catch (error) {
		console.log(error)
	}
}