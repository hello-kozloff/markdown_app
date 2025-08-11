"use client";

import React from "react";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { useMarkdownEditor, UseMarkdownEditorOptions } from "../hooks/use-markdown-editor";
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
import { Input } from "@/shared/ui/input";
import { Avatar, AvatarImage } from "@/shared/ui/avatar";

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
              <div className="px-3">
                <Input
                  value="README.md"
                  variant="transparent"
                  className="text-xl"
                />
              </div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Файл
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Создать
                    </MenubarItem>
                    <MenubarItem>
                      Открыть
                    </MenubarItem>
                    <MenubarItem>
                      Создать копию
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Поделиться
                    </MenubarItem>
                    <MenubarItem>
                      Скачать
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Переименовать
                    </MenubarItem>
                    <MenubarItem>
                      Переместить
                    </MenubarItem>
                    <MenubarItem>
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
                      Отменить
                    </MenubarItem>
                    <MenubarItem>
                      Повторить
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem
                      disabled
                    >
                      Вырезать
                    </MenubarItem>
                    <MenubarItem
                      disabled
                    >
                      Копировать
                    </MenubarItem>
                    <MenubarItem>
                      Вставить
                    </MenubarItem>
                    <MenubarItem>
                      Вставить без
                      форматирования
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Выбрать все
                    </MenubarItem>
                    <MenubarItem
                      disabled
                    >
                      Удалить
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Найти и заменить
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Вид
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Создать
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Формат
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Создать
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm px-3 py-1.5">
                    Справка
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Создать
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div>
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="/example-avatar.jpg"
                  className="object-cover"
                />
              </Avatar>
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
