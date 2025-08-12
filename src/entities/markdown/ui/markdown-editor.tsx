"use client";

import React from "react";
import {
  ProseMirror,
  ProseMirrorDoc
} from "@handlewithcare/react-prosemirror";
import {
  useMarkdownEditor,
  UseMarkdownEditorOptions
} from "../hooks/use-markdown-editor";
import { proseMirrorViewPlugins } from "../model/plugins";
import { MarkdownToolbar } from "@/entities/markdown/ui/markdown-toolbar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from "@/shared/ui/menubar";
import {
  BoldIcon,
  ClipboardIcon,
  ClipboardPasteIcon,
  CodeXmlIcon,
  DeleteIcon,
  FolderDownIcon,
  FolderOpenIcon,
  FolderPenIcon,
  FolderPlusIcon,
  FolderUpIcon,
  FolderXIcon,
  HeadingIcon,
  ImageIcon,
  ItalicIcon,
  LibraryBigIcon,
  LinkIcon,
  ListIcon,
  RedoIcon,
  ScanSearchIcon,
  ScissorsIcon,
  SearchIcon,
  SquareSquareIcon,
  StrikethroughIcon,
  Table2Icon,
  TableRowsSplitIcon,
  TextQuoteIcon,
  UnderlineIcon,
  UndoIcon
} from "lucide-react";

export type MarkdownEditorProps = Pick<
  UseMarkdownEditorOptions,
  "initialMarkdown"
>;

export function MarkdownEditor({
  initialMarkdown
}: MarkdownEditorProps) {
  const {
    editorState,
    dispatchTransaction
  } = useMarkdownEditor({
    initialMarkdown
  });

  if (!editorState) {
    return (
      <div>Загрузка редактора...</div>
    );
  }

  return (
    <ProseMirror
      state={editorState}
      dispatchTransaction={
        dispatchTransaction
      }
      plugins={proseMirrorViewPlugins}
      className="prose outline-0"
    >
      <div className="sticky inset-x-0 top-0 border-b bg-background shadow-xl shadow-background">
        <div className="py-2 px-2 grid gap-2 border-b">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <span className="px-3 text-xl font-medium">
                README.md
              </span>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Файл
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <FolderPlusIcon />
                      Создать
                    </MenubarItem>
                    <MenubarItem>
                      <FolderOpenIcon />
                      Открыть
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <FolderUpIcon />
                      Поделиться
                    </MenubarItem>
                    <MenubarItem>
                      <FolderDownIcon />
                      Скачать
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <FolderPenIcon />
                      Переименовать
                    </MenubarItem>
                    <MenubarItem>
                      <FolderXIcon />
                      Удалить
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Правка
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <UndoIcon />
                      Отменить
                    </MenubarItem>
                    <MenubarItem>
                      <RedoIcon />
                      Повторить
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem
                      disabled
                    >
                      <ScissorsIcon />
                      Вырезать
                    </MenubarItem>
                    <MenubarItem
                      disabled
                    >
                      <ClipboardIcon />
                      Копировать
                    </MenubarItem>
                    <MenubarItem>
                      <ClipboardPasteIcon />
                      Вставить
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <SquareSquareIcon />
                      Выбрать все
                    </MenubarItem>
                    <MenubarItem
                      disabled
                    >
                      <DeleteIcon />
                      Удалить
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <ScanSearchIcon />
                      Найти и заменить
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Вставка
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <HeadingIcon />
                      Заголовок
                    </MenubarItem>
                    <MenubarItem>
                      <ListIcon />
                      Список
                    </MenubarItem>
                    <MenubarItem>
                      <TextQuoteIcon />
                      Цитата
                    </MenubarItem>
                    <MenubarItem>
                      <CodeXmlIcon />
                      Код
                    </MenubarItem>
                    <MenubarItem>
                      <ImageIcon />
                      Изображение
                    </MenubarItem>
                    <MenubarItem>
                      <Table2Icon />
                      Таблица
                    </MenubarItem>
                    <MenubarItem>
                      <TableRowsSplitIcon />
                      Горизонтальная
                      линия
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Формат
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <BoldIcon />
                      Жирный
                    </MenubarItem>
                    <MenubarItem>
                      <ItalicIcon />
                      Курсив
                    </MenubarItem>
                    <MenubarItem>
                      <UnderlineIcon />
                      Подчеркнутый
                    </MenubarItem>
                    <MenubarItem>
                      <StrikethroughIcon />
                      Зачеркнутый
                    </MenubarItem>
                    <MenubarItem>
                      <LinkIcon />
                      Ссылка
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Справка
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <SearchIcon />
                      Поиск
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <LibraryBigIcon />
                      Обучение
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
        <MarkdownToolbar />
      </div>
      <div className="max-w-2xl mx-auto p-12">
        <ProseMirrorDoc />
      </div>
    </ProseMirror>
  );
}
