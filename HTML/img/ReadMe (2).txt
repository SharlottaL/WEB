https://github.com/okovtun/PD_411_WIN.git
https://www.youtube.com/playlist?list=PLeqyOOqxeiIPLv3EUlwogX7k-Pr1vrOjX

https://learn.microsoft.com/ru-ru/cpp/c-runtime-library/reference/mbstowcs-mbstowcs-l?view=msvc-170

Messages:
https://learn.microsoft.com/en-us/windows/win32/winmsg/windowing
https://learn.microsoft.com/en-us/cpp/mfc/modal-and-modeless-dialog-boxes?view=msvc-170

TOREAD:
https://learn.microsoft.com/en-us/windows/win32/winmsg/about-messages-and-message-queues#sending-messages

IEEE-754:
http://www.softelectro.ru/ieee754.html

InstallerProjects:
https://learn.microsoft.com/en-us/visualstudio/deployment/installer-projects-net-core?view=vs-2022
2017:	https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2017InstallerProjects
2022:	https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2022InstallerProjects

Range-based for:
	//https://legacy.cplusplus.com/doc/tutorial/control/#:~:text=equal%20to%2050.-,Range%2Dbased%20for%20loop,-The%20for%2Dloop
	//https://www.youtube.com/watch?v=11Yqy4YLppw&list=PLeqyOOqxeiINwoETYVNufASRa3i53K2Gb&index=21

TODO:
1. В плейлисте при загрузке песенки должна отображаться ее продолжительность;
2. Добавить в плейер кнопки 'Shuffle' и 'Repeat';
3. Добавить кнопку 'DEL', которая удаляет песенку из плейлиста;
4. Добавить кнопку 'CLR', которая очищает плейлист;
5. Добавить кнопку 'DIR', которая добавляет все аудиофайлы из укащанной папки;
6. При закрытии плейера плейлист должен сохраняться, а и запуске восстанавливаться;

DONE:
1. Реализвать регулировку громкости;
2. По мере воспроизвеления должен перемещаться ползунок 'horizontalSliderTime';
3. https://t.me/+Zn12BooPxuEzYjBi
4. https://eu.hitmo-top.com/song/71414741

TeamProject:
1. Водопадная модель разработки;
2. Спиральная модель разработки;
3. Agile:	https://agilemanifesto.org/
			https://www.atlassian.com/ru/agile
4. Scrum:	https://scrumguides.org/index.html
			https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf#zoom=100

TODO:
1. Использовать IPaddressControl в приложении WPF:
	https://learn.microsoft.com/en-us/dotnet/desktop/wpf/advanced/wpf-and-win32-interoperation
2. Написать тектовый редактор;

DONE:
1. При нажатии Enter после ввода информации курсор должен переходить в сдедующее поле для ввода;

DONE:
1. Добавить значок в главное окно WPF-приложения;
2. Аналогичное окно с сетко сделать при помощи свойств;

TODO:
1. Добавить контекстное меню пункт 'Alarms', при нажатии на который откроется окно с будильниками.
	Будильников можно добавлять сколько угодно, как на заданное время, так и на заданную дату.
	При достижении заданных даты/времени, будтльник должен воспроизводить звуковой сигнал,
	либо встроенный, либо по выбору пользователя;
2. Добавить окно, позволяющее создавать Countdown-таймеры до выбранной временоой точки.
   По истечении времени должен воспроизводиться звуковой сигнал;

DONE:
1. Шрифты в выпадающем списке должны быть отсортированы в алфавитном порядке, независимо от расширения файла; DONE
2. Сделать длительную проверку часов (желательно больше часа или нескольких часов) С КАСТОМНЫМ ШРИФТОМ;	DONE
3. Окна выбора цвета и шрифта всегда должны открываться рядом с часами, а не в другом конце экрана. IN PROGRESS
4. В контекстное меню доьавить пункт с галочкой "Загружать при старте Windows";		DONE
5. Конфигурация программы (Topmost, Show Date/Weekday, поциция на экране, Цвета и шрифт) DONE
   должна сохраняться при выходе, и загружаться при следующем запуске;
6. Обеспечить возможность перемещать часы по экрану без отображения элементов управления;	DONE

DONE:
1. Часы должны всегда запускаться в правом верхнем углу, независимо от размера экрана;
2. Обеспечить возможность выбора кастомного шрифта для часов;
3. Обеспечить возможность выбирать цвет текста и фона для часов;

DONE:
1. Сделать COMMIT и создать ветку 'WindowsForms_HW1';
2. Добавить на форму галочку (CheckBox) 'Показать дату'.
   Если она установлена, то под временем должна отображаться дата;
3. Добавить галочку 'Показать день недели', и если она установлена,
   то под датой/временем должен отображаться день недели;

DONE:
1. Разобрать 'SetupWizard';
2. Попробовать другие установщики прилоений;
3. Реализовать текстовые редактор по типу Блокнота (notepad);

DONE:
1. Упаковать несколько шрифтов в DLL, и использовать шрифты из DLL-файла;
2. Сделать подменю для тем и для шрифтов;

DONE:
1. Сделать свои кнопки;	DONE
2. Добавить проект 'LastError', и в этом проекте собрать DONE
   статическую или динамическую библиотеку с функциями FormatLastError() и PrintLastError();
	https://learn.microsoft.com/en-us/cpp/build/walkthrough-creating-and-using-a-static-library-cpp?view=msvc-170
	https://learn.microsoft.com/en-us/cpp/build/walkthrough-creating-and-using-a-dynamic-link-library-cpp?view=msvc-170
3. Добавить свой шрифт из файла;DONE

DONE:
Добить кнопки;

DONE:
1. Прикрутить значки к кнопкам;

DONE:
1. Делаем COMMIT и создаем ветку CalculationsHW;
2. Организовать вычисления;

DONE:
1. Делаем COMMIT и создаем ветку ButtonsHW;
2. В созданной ветке создаем кнопки Калькулятора;

DONE:
1. Окно должно запускаться ровно посередине экрана, как по горизонтали, так и по вертикали,
   и должно занимать ровно 75% экран, незавимо от его разрешения;
2. В строке заголовка окна отобразить размер окна и его положение на экране;

DONE:
1. В Solution 'WinAPI' добавить проект 'ListBox', и в этом проекте реализовать все те же действия,
   которые реализованы в проекте 'ComboBox';
2. В проекте 'ListBox' добавить кнопки 'Добавить' и 'Удалить';
3. При нажатии на кнопку 'Добавить' открывается еще одно окно, в котором можно вписать название элемента;
4. При двойном щелчке мышью на пунте 'ListBox' открывается такое же окно, но на изменение элемента;
5. При нажатии на кнопку 'Удалить' удаляется выбранный элемент 'ListBox-а';

DONE:
При запуске программы в текстовом поле 'Login' отображается приглашение "Введите имя пользователя".
Когда пользователь щелкает на нем мышкой, приглашение пропадает.
Если пользователь ввел свое имя, то при переходе с поля для ввода имени на другие элементы имя остается,
но если пользователь оставил поле устым, то при переходе на другие элементы интерфейса в текстовое поле 'Login'
возвращается приглашение "Введите имя пользователя".