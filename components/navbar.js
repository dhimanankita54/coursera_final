function navbar(){
    return ` <header id="nav">
    <nav>
        <div id="logo">
            <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" />
        </div>
        <ul class="menu">
            <li id="explore"><a href="/">
                    <h3 class="h2explore">Explore</h3>
                </a>
                <ul class="submenu">
                    <li><a>Goals</a></li>
                    <li><a>Take a free course</a></li>
                    <li><a>Earn a Degree</a>
                        <ul class="submenu2">
                            <li><a href="/">
                                    <div id="left-margin">
                                        <h2>Earn a Degree</h2>
            

                                        <div class="grid">
                                            <div id="datasci">
                                                <h2>Data Science</h2>
                                                <hr />
                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Michigan</p>
                                                        <h3>Master of Applied Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/bb/16e85962a963ab3546196705d25865/CUBoulder_360x360.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Colorado Boulder</p>
                                                        <h3>Master of Science & Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master in Computer Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/90986f87ac4cbab18d95de27255442/HSE_white.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>HSE University </p>
                                                        <h3>Master of Applied Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Michigan</p>
                                                        <h3>Master of Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>Universidad de Los Andes</p>
                                                        <h3>Maestria en inteligencia Analitica de Datos</h3>
                                                    </div>
                                                </div>

                                            </div>

                                            <div id="datasci">
                                                <h2>Business</h2>
                                                <hr />
                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master of Business Administration(iMBA)</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/bb/16e85962a963ab3546196705d25865/CUBoulder_360x360.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of London</p>
                                                        <h3>Bachelor of Science in Marketing</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master of Science in Management</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/90986f87ac4cbab18d95de27255442/HSE_white.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of North Texas</p>
                                                        <h3>Bachelor of Applied Arts & Sciences</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>Fundacao instituto de Administracao</p>
                                                        <h3>Master of Business Administration</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>O.P. Jindal Global University</p>
                                                        <h3>MBA in Business Analytics</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </a></li>

                        </ul>
                    </li>
                    <li><a>Earn a Certificate</a></li>
                    <li><a>Launch or advance your career</a>
                        <ul class="submenu2">
                            <li><a>
                                    <div id="left-margin">
                                        <h2>Earn a Degree</h2>
                                        <p>Breakthrough pricing on 100% online degrees designed to fit into your
                                            life.</p>

                                        <div class="grid">
                                            <div id="datasci">
                                                <h2>Data Science</h2>
                                                <hr />
                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Michigan</p>
                                                        <h3>Master of Applied Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/bb/16e85962a963ab3546196705d25865/CUBoulder_360x360.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Colorado Boulder</p>
                                                        <h3>Master of Science & Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master in Computer Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/90986f87ac4cbab18d95de27255442/HSE_white.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>HSE University </p>
                                                        <h3>Master of Applied Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Michigan</p>
                                                        <h3>Master of Data Science</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>Universidad de Los Andes</p>
                                                        <h3>Maestria en inteligencia Analitica de Datos</h3>
                                                    </div>
                                                </div>

                                            </div>

                                            <div id="datasci">
                                                <h2>Business</h2>
                                                <hr />
                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master of Business Administration(iMBA)</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/bb/16e85962a963ab3546196705d25865/CUBoulder_360x360.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of London</p>
                                                        <h3>Bachelor of Science in Marketing</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of Illinios at Urbana-Champaign</p>
                                                        <h3>Master of Science in Management</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/90986f87ac4cbab18d95de27255442/HSE_white.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>University of North Texas</p>
                                                        <h3>Bachelor of Applied Arts & Sciences</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>Fundacao instituto de Administracao</p>
                                                        <h3>Master of Business Administration</h3>
                                                    </div>
                                                </div>

                                                <div class="flex">
                                                    <div>
                                                        <img
                                                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=2&w=36&h=36" />
                                                    </div>
                                                    <div>
                                                        <p>O.P. Jindal Global University</p>
                                                        <h3>MBA in Business Analytics</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </a></li>

                        </ul>
                    </li>
                    <li><a>Subjects</a></li>
                    <li><a>Data Science</a></li>
                    <li><a>Business</a></li>
                    <li><a>Computer Science</a></li>
                </ul>
            </li>
        </ul>

        <div id="search_icon">
        <i style="font-size:24px" id="icon" class="fa">&#xf002;</i>
        <input type="text" id="searchbar" oninput="debounce(displayMovies, 1000)"
            placeholder="What do you want to" />
    </div>

        
        <p class="selectors"><a href="online_degrees.html">Online Degrees</a></p>
        <p class="selectors"><a href="find_careers.html">Find Careers</a></p>
        <p class="selectors"><a href="online_degrees.html">For Enterprise</a></p>
        <p class="selectors"><a href="find_careers.html">For Students</a></p>
        <p class="selectors login"><a href="sign_in.html">Log In</a></p>
        <p class="join"><a href="sign_up.html">Join for Free</a></p>
       
    </nav>
</header>
<hr />`
}

export default navbar;